import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/UserContex";

export default function PrivateRoute({ Children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <button className="btn btn-lg btn-ghost btn-square loading" />;
  }

  if (user && user.uid) {
    return Children;
  }

  return <Navigate to="/log-in" />;
}
