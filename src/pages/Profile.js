import React, {Fragment, useContext, useEffect} from 'react';
import {GithubContext} from "../context/github/githubContext";
import {Link} from "react-router-dom";
import Repos from "../components/Repos/Repos";

const Profile = ({match}) => {

  const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)

  const urlName = match.params.name

  useEffect(() => {
    getUser(urlName)
    getRepos(urlName)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return <p className="text-center">Loading</p>
  }

  const {
    name, company, avatar_url,
    location, bio, blog,
    login, html_url, followers,
    public_repos, public_gists,
    following
  } = user

  return (
      <Fragment>
        <Link to="/" className="btn btn-link">Main</Link>
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3 text-center">
                <img
                    src={avatar_url}
                    alt={name}
                    style={{width: '200px'}}
                />
                <h1>{name}</h1>
                {location && <p>Location: {location}</p>}
              </div>
              <div className="col">
                {
                  bio && <Fragment>
                    <h3>BIO</h3>
                    <p>{bio}</p>
                  </Fragment>
                }
                <a href={html_url} target="_blank" className="btn btn-dark" rel="noopener noreferrer">Open Profile</a>
                <ul>
                  {login && <li>
                    <strong>Username: </strong> {login}
                  </li>}

                  {company && <li>
                    <strong>Company: </strong> {company}
                  </li>}

                  {blog && <li>
                    <strong>Website: </strong> {blog}
                  </li>}
                </ul>

                <div className="label label-primary">Followers: {followers}</div>
                <div className="label label-success">Following: {following}</div>
                <div className="label label-info">Repositories: {public_repos}</div>
                <div className="label label-dark">Gists: {public_gists}</div>
              </div>
            </div>
          </div>
        </div>

        <Repos repos={repos} />
      </Fragment>
  );
};

export default Profile;
