import User from "../../../entities/User";
import { Resolvers } from "../../../types/resolvers";
import { EmailSignInMutationArgs, EmailSignInResponse } from "../../../types/graphql";


const resolvers:Resolvers = {
    Mutation: {
        EmailSignIn: async(_, args:EmailSignInMutationArgs):Promise<EmailSignInResponse> => {
            const {email, password} = args;
            try{
                
                const user = await User.findOne({email})
                if(!user){
                    return {
                        ok:true,
                        error:"No Id with that Email",
                        token:null
                    }
                }

                const checkPassword = user.comparePassword(password);

                if(checkPassword){
                    return {
                        ok:true,
                        error: null,
                        token: "comming soon"
                    }
                }else{
                    return {
                        ok:false,
                        error:"Wrong Password",
                        token:null
                    }
                }
                
            }catch(error){
                return {
                    ok:false,
                    error:error.message,
                    token:null
                }
            }
        }
    }
}

export default resolvers;