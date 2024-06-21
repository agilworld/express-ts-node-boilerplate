import firebase from "../config/firebaseConfig"
import { passwordMatches, generateToken } from "../libs/token"

const db = firebase.firestore()
const documentId:string = "users"

type IParams = {
  name:string 
  country:string
  location:string 
  email:string
}

type ResponseCheckGenerate = string | boolean 

class UserRepository {  
  protected userId: string 

  constructor(userId:string) {
    this.userId = userId
  }

  async update(paramsBody:IParams) {
    const userDoc = await db.collection(documentId).doc(this.userId).update({
      name:paramsBody.name,
      country:paramsBody.country,
      location:paramsBody.location,
      email:paramsBody.email
    })
    return true
  }

  static async isUserExists(user:string) {
    const userDoc = await db.collection(documentId)
      .where("email", '==',user)
      .get()

    if( userDoc.empty ) {
      return false
    }

    return userDoc.docs[0]
  }

  static async checkAndGenerateToken(user:string, pass:string):Promise<ResponseCheckGenerate> {
    const userData = await this.isUserExists(user) 
    if( userData ) {
      const passHashed = userData.get("password") as string
      const isMatched = await passwordMatches(pass, passHashed) 
      if( isMatched ) {
        const tokenNew = generateToken(userData.id)
        await db.collection(documentId).doc(userData.id).update({
          token:tokenNew
        })

        return tokenNew
      }
    }

    return false
  }
}

export default UserRepository
