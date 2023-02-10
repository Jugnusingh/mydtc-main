import React from 'react'
const Logout = () => {
const history = useHistory();
  useEffect(() => {
    localStorage.removeItem("token");
    history.push("/");
  }, [history]);
  return <></>;
};

export default Logout;