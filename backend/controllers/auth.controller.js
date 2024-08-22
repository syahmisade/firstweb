export const signup = async (req, res) => {
    const {email, password, name} = req.body;
    try {
        
    } catch (error) {
        
    }
}

export const login = async (req, res) => {
    res.send("Login route");
}

export const logout = async (req, res) => {
    res.send("Logout route");
}