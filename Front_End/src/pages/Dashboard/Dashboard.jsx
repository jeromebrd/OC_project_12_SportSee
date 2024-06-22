import { useEffect, useState } from 'react';
import { getMockUserById } from '../../service/models';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import AsideNav from '../../components/AsideNav/AsideNav';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const params = useParams();
  const paramsId = Number(params.id);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Response was not ok: ' + response.statusText);
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }
  const {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE,
  } = data;
  console.log('USER_MAIN_DATA : ', USER_MAIN_DATA);
  console.log('USER_ACTIVITY : ', USER_ACTIVITY);
  console.log('USER_AVERAGE_SESSIONS : ', USER_AVERAGE_SESSIONS);
  console.log('USER_PERFORMANCE : ', USER_PERFORMANCE);
  const getUserById = getMockUserById(USER_MAIN_DATA, paramsId);
  // console.log(getUserById);
  const { id, userInfos } = getUserById[0];
  console.log(id, userInfos);

  return (
    <section className={styles.dashboard}>
      <AsideNav userId={id} />
      <div>
        <h1>
          Bonjour <span>{userInfos.firstName}</span>
        </h1>
        <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
    </section>
  );
};

export default Dashboard;
