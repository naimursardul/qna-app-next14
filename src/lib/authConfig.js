import Credentials from "next-auth/providers/credentials";

export const authConfig = {
  providers: [
    Credentials({
      authorize: async (credential) => {
        console.log(credential);
        let user = { ...credential };
      },
    }),
  ],
};
