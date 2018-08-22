import { Resolvers } from "../../../types/resolvers";
import { EmailSignInMutationArgs, EmailSignInResponse } from "../../../types/graphql";
import User from "../../../entities/User";

const resolvers:Resolvers = {
    Mutation: {
        EmailSignIn: async(_, args:EmailSignInMutationArgs):Promise<EmailSignInResponse> => {
            const {email} = args;
            try{
                const user = User.findOne({email})
                if(!user){
                    return {
                        ok:true,
                        error:"No Id with that Email",
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