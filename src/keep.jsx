useEffect(() => {
  axios(`${baseUrl}/search/users/${id}`)
    .then((res) => res.data)
    .then((data) => {
      console.log(data);
      setSearchUser(data);
    });
}, []);

<img src={searchUser.avatar_url} alt="user" />;
// <p>{console.log(searchUser.login)}</p>

//.then((data) => {
console.log(data);
setSearchUser(data);
