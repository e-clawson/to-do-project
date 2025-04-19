
export const register = async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password){//if data isn't available, return:
        return res.json({succes: false, message: 'missing details'})
    }

    try { 
        
    } catch(err) {
        res.json({seccess: false, message: err.message})
    }
}