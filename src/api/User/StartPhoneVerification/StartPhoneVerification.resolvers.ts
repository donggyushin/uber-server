import { Resolvers } from "../../../types/resolvers";

import { StartPhoneVerificationMutationArgs, StartPhoneVerificationResponse } from "../../../types/graphql";
import Verification from "../../../entities/Verification";

const resolvers:Resolvers = {
    Mutation: {
        StartPhoneVerification: async(_, args:StartPhoneVerificationMutationArgs):Promise<StartPhoneVerificationResponse> => {
            const {phoneNumber} = args;
            try{
                const existing_verification= await Verification.findOne({payload: phoneNumber})
                if(existing_verification){
                    existing_verification.remove();
                }
                const newVerification = await Verification.create({
                    payload: phoneNumber,
                    target:"PHONE"
                }).save();
                //To do: send SMS

            }catch(error){
                return {
                    ok:false,
                    error:error.message
                }
            }
        }
    }
}

export default resolvers;