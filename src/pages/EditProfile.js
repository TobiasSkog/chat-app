import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

const EditProfile = () => {
	const [newUsername, setNewUsername] = useState();
	const [newEmail, setNewEmail] = useState();

	const context = useOutletContext();

	const storeNewUsername = (event) => {
		let val = event.target.value;
		setNewUsername(val);
	};

	const updateUsername = () => {
		context.updateUsername(newUsername);
	};

	const storeNewEmail = (event) => {
		let val = event.target.value;
		setNewEmail(val);
	};

	const updateEmail = () => {
		context.updateEmail(newEmail);
	};
	return (
		<>
			<div className="home card">
				<p>Edit your Username:</p>
				<input onChange={storeNewUsername} type="text" placeholder={context.user.username} />
				<button onClick={updateUsername} className="btn pink">
					Update Username
				</button>
			</div>
			<br />
			<div className="home card">
				<p>Edit your Email:</p>
				<input onChange={storeNewEmail} type="text" placeholder={context.user.email} />
				<button onClick={updateEmail} className="btn pink">
					Update Email
				</button>
			</div>
		</>
	);
};

export default EditProfile;
