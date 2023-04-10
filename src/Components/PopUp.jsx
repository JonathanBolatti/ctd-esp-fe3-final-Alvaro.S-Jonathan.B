import "../index.css"
const PopUp = ({userName, userMail}) =>{
    return (
        <div className="container">
            <p>Thank you ! {userName},</p>
            <p>We received your inquiry, shortly we will contact you by email {userMail} </p>
        </div>
    )
}
export default PopUp;
