import BreadCrumb from '../common/breadCrumb'
import {useState} from 'react'
function AddManga() {

  const [formParams, setFormParams] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`The name you entered was: ${name}`)
  }
	return (
		<>
		
    <div className="main">

        <div className="container">
            <form method="POST" id="signup-form" className="signup-form" encType="multipart/form-data">
                <h3>
                    Account Setup
                </h3>
                <fieldset>
                    <h2>Creat your account</h2>
                    <div className="form-group">
                        <input type="email" name="email" id="email" placeholder="Eg: aucreative@gmail.com"/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" id="password" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="repassword" id="repassword" placeholder="Confirm Password"/>
                    </div>
                </fieldset>

                <h3>
                    Social Profiles
                </h3>
                <fieldset>
                    <h2>Social profiles</h2>
                    <div className="form-group">
                        <input type="text" name="socials_twitter" id="socials_twitter" placeholder="Twitter"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="socials_facebook" id="socials_facebook" placeholder="Facebook"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="socials_google" id="socials_google" placeholder="Google Plus"/>
                    </div>
                </fieldset>

                <h3>
                    Personal Details
                </h3>
                <fieldset> 
                    <h2>Personal Details</h2>
                    <div className="form-group">
                        <input type="text" name="your_name" id="your_name" placeholder="Your name"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="your_phone" id="your_phone" placeholder="Phone"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="your_addr" id="your_addr" placeholder="Address"/>
                    </div>
                </fieldset>
            </form>
        </div>

    </div>

		</>
		)
}

export default AddManga