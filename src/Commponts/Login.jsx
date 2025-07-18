import { Box ,Button , TextField , Typography , Paper } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
useNavigate
const Login = () => {

       const [email , setEmail] = useState("")
       const [password , setPassword] = useState("")

       const navigate = useNavigate()


       
    const handelLogin = async(e)=>{
        e.preventDefault()

        const res = await fetch("http://localhost:5000/login" , {
            method:"POST",
            headers:{"Content-Type" : "application/json"},
            body: JSON.stringify({email , password })
        })
        const data = await res.json() 
        if(data.token){
            localStorage.setItem("token" , data.token);

            navigate("/home")
            
        }else{
            alert("فشل التسجيل")
        }
    }


  return (
    <Box display="flex" 
    justifyContent="center"
     alignItems="center" minHeight="100vh"
      bgcolor="#f5f5f5" minWidth="100vw"
     sx={{position:"absolute" , left:0 , top : 0}}
      >

        <Paper elevation={3} sx={{p:4 , width : "100%" , maxWidth:400}}>
            <Typography variant="h5" mb={2} textAlign="center">
                تسجيل الدخول
            </Typography>
            <form onSubmit={handelLogin}>
                <TextField
                fullWidth
                label="البريد الالكتروني"
                margin="normal"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <TextField
                fullWidth
                type="password"
                label = "كلمة المرور "
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                
                />
                
                <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                sx={{mt:2}}>دخول</Button>
            </form>
        </Paper>
    </Box>
  )
}

export default Login