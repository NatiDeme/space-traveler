import './missions.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, changeStatus } from '../../redux/missions/missions';
import Description from './Description';

const Missions = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalMission, setModalMission] = useState({
    name: '',
    description: '',
  });
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions);
    // eslint-disable-next-line
  }, []);

  const toggleStatus = (id) => {
    dispatch(changeStatus(id));
  };

  const showModal = (name, description) => {
    setOpenModal(true);
    setModalMission({
      name,
      description,
    });
  };

};

export default Missions;
