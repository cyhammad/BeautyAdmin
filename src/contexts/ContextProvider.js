import { collection, doc, query, updateDoc, where } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../api/firebase-config";
import useAppointments from "../hooks/useAppointments";
import useFetch from "../hooks/useFetch";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [check, setCheck] = useState([]);
  const [users, setUsers] = useState([]);
  const [availability, setAvailability] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [unReadMessages, setUnReadMessages] = useState(0);

  const { data: usersData } = useFetch("Users", check);
  const { data: availabilityData } = useFetch("weekstatus", check);
  const { appointmentData } = useAppointments(check);

  const q2 = query(
    collection(db, "messages"),
    where("recieverId", "==", "admin"),
    where("isRead", "==", false)
  );

  const [unRead] = useCollectionData(q2, { idField: "id" });

  console.log(appointmentData);

  const updateUnReadMessages = (unRead) => {
    setUnReadMessages(unRead);
  };

  const updateCheck = () => {
    setCheck(!check);
  };

  const updateUsers = (data) => {
    setUsers(data);
  };

  const updateAppointments = (id, approved) => {
    console.log(id + " " + approved);
    appointments.forEach((appointment) => {
      if (appointment.id === id) {
        console.log(appointment);
        appointment.isApproved = approved;
      }
    });
    console.log(appointments);
    setAppointments(appointments);
  };
  const updateAvailability = (id, start, end) => {
    console.log(start + " " + end);
    availability.forEach((avail) => {
      if (avail.id === id) {
        console.log(avail);
        avail.bookingStart = start;
        avail.bookingEnd = end;
      }
    });
    console.log(availability);
    setAvailability(availability);
  };
  const updateOffday = (id, offday) => {
    console.log(offday);
    availability.forEach((avail) => {
      if (avail.id === id) {
        console.log(avail);
        avail.isOffday = offday;
      }
    });
    console.log(availability);
    setAvailability(availability);
  };

  useEffect(() => {
    updateUnReadMessages(unRead?.length);
  }, [unRead]);

  useEffect(() => {
    const initialize = () => {
      setUsers(usersData);
      setAppointments(appointmentData);
      setAvailability(
        availabilityData.sort(function (x, y) {
          let a = x.date.toDate().getTime(),
            b = y.date.toDate().getTime();
          return b - a;
        })
      );
    };
    initialize();
    // setIsLoading(false);
  }, [appointmentData, usersData, availabilityData]);

  const confirmAppointment = (selectedAppointment) => {
    console.log(selectedAppointment);
    availability.forEach((avail) => {
      // console.log(selectedAppointment.Date.toDate().toDateString());
      if (
        selectedAppointment.Date.toDate().toDateString() ===
        avail.date.toDate().toDateString()
      ) {
        console.log(avail.date.toDate().toDateString());
        avail.slots.forEach(async (slot) => {
          let filteredSlots = [];
          if (selectedAppointment.slotId === slot.id) {
            console.log(avail.slots);
            console.log(selectedAppointment.slotId);
            filteredSlots = avail?.slots?.filter(
              (slot) => selectedAppointment.slotId !== slot.id
            );
            console.log(filteredSlots);
            await updateDoc(doc(collection(db, "weekstatus"), avail.id), {
              slots: filteredSlots,
            });
          }
        });
      }
    });
  };

  console.log(appointments);
  console.log(users);
  return (
    <StateContext.Provider
      value={{
        currentUser,
        users,
        appointments,
        availability,
        unReadMessages,
        setCurrentUser,
        updateCheck,
        updateAppointments,
        updateAvailability,
        updateOffday,
        updateUsers,
        updateUnReadMessages,
        confirmAppointment,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
