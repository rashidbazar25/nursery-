import { Box ,Button , TextField , Typography , Paper } from "@mui/material"
import { useState } from "react"

const Regester = () => {

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const handelRegester = async(e)=>{
        e.preventDefault();
        const res = await fetch("http://localhost:5000/register" , {
            method:"POST",
            headers:{"Content-Type" : "application/json"},
            body: JSON.stringify({email , password })
        })
        const data = await res.json() 
        if(res.ok){
            console.log("تم انشاء الحساب بنجاح ");
            
        }else{
            alert("فشل انشاء الحساب")
        }
    }

  return (

    <Box display="flex" 
    justifyContent="center" 
    alignItems="center" 
    minHeight="100vh" 
    bgcolor="#f5f5f5" 
    minWidth="100vw" 
    sx={{position:"absolute" , left:0 , top : 0}}>

        <Paper elevation={3} sx={{p:4 , width : "100%" , maxWidth:400}}>
            <Typography variant="h5" mb={2} textAlign="center">
                إنشاء حساب
            </Typography>
            <form onSubmit={handelRegester}>
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
                color="success"
                sx={{mt:2}}>تسجيل</Button>
            </form>
        </Paper>
    </Box>
 
  )
}

export default Regester