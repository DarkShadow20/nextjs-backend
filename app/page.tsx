import client from "@/db"


async function getUserData(){
  const user = await client.user.findFirst()

  return {
    email:user?.username,
    name:user?.username
  }

}

// async component
export default async function Home() {
  const userDetails = await getUserData()
  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userDetails?.name}
                </div>
                
                {userDetails?.email}
            </div>
        </div>
    </div>
  );
}
