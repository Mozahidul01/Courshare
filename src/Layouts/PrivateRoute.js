import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/UserContex";

export default function PrivateRoute({ children }) {
	const { user, loading } = useContext(AuthContext);

	if (loading) {
		return <button className='btn btn-lg btn-ghost btn-square loading' />;
	} else if (!loading && user.uid) {
		return children;
	} else {
		return <Navigate to='/log-in' />;
	}
}
