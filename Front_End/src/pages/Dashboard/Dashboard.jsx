import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Dashboard.module.css';
import Loader from '../../components/Loader/Loader';
import Error404 from '../Errors/Error404/Error404';
import AsideNav from '../../components/AsideNav/AsideNav';
import UserActivity from '../../components/User/UserActivity';
import UserPerformance from '../../components/User/UserPerformance';
import UserScore from '../../components/User/UserScore';
import UserSessions from '../../components/User/UserSessions';
import Card from '../../components/Card/Card';

import { fetchData } from '../../service/models';
const Dashboard = () => {
  const params = useParams();
  const paramsId = Number(params.id);
  const [userData, setUserData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [sessionsData, setSessionsData] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        await Promise.all([
          fetchData(
            `http://localhost:3000/user/${paramsId}`,
            setUserData,
            setError
          ),
          fetchData(
            `http://localhost:3000/user/${paramsId}/activity`,
            setActivityData,
            setError
          ),
          fetchData(
            `http://localhost:3000/user/${paramsId}/average-sessions`,
            setSessionsData,
            setError
          ),
          fetchData(
            `http://localhost:3000/user/${paramsId}/performance`,
            setPerformanceData,
            setError
          ),
        ]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [paramsId]);

  if (loading) {
    return <Loader />;
  }

  if (error && error.code === 404) {
    return <Error404 />;
  }

  if (!userData || !activityData || !sessionsData || !performanceData) {
    return <Loader />;
  }
  const getUserById = userData.data;

  const { userInfos, keyData, todayScore, score } = getUserById;
  const objectifScore = todayScore || score;

  return (
    <section className={styles.dashboard}>
      <AsideNav />
      <div className={styles.grid_ctn}>
        <h1>
          Bonjour <span>{userInfos.firstName}</span>
        </h1>
        <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        <UserActivity activityData={activityData} />
        <div className={styles.squaresGraph_ctn}>
          <UserSessions sessionsData={sessionsData} />
          <UserPerformance performanceData={performanceData} />
          <UserScore
            data={userData}
            userId={paramsId}
            objectifScore={objectifScore}
          />
        </div>
        <div className={styles.cardInfo_ctn}>
          {userData != null && <Card type={'calories'} data={keyData} />}
          {userData != null && <Card type={'proteines'} data={keyData} />}
          {userData != null && <Card type={'glucides'} data={keyData} />}
          {userData != null && <Card type={'lipides'} data={keyData} />}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
