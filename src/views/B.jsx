import React from "react";
import { useNavigate } from "react-router-dom"
const B = (props) => {
    const navigate = useNavigate()
    // const { navigate } = props 
    return <div className="box">
        B组件的内容
        <button onClick={() => {
            navigate('/c/100/xxx')
        }}>跳转C</button>
    </div>
}

export default B