import Fastify from 'fastify'
import { request } from 'http'
const server = Fastify({
logger:true,

}
)

const users=["Ahmad", "Ali", "fahad"]
const profil={
name :"Ali",
age : 27,
location: "riyadh" ,
}
const posts={
name : "nature",
location: "Aurop"
}
server.get ("/",async(request,replay)=>{

return("/users")
  
})
server.get ("/",async(request,replay)=>{

  return("/profil/Ali")
    
  })
  server.get ("/",async(request,replay)=>{

    return("/posts")
      
  })

  


server.listen({ port: 3000 }, (err, address) => {
    if (err) throw err

  })
