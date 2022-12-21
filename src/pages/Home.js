import React, { useEffect, useState } from "react";
import AddTimeSlot from "../components/AddTimeSlot";
import AppointmentsTable from "../components/AppointmentsTable";
import ApprovedTable from "../components/ApprovedTable";
import AvailabilityTable from "../components/AvailabilityTable";
import EditTimeSlot from "../components/EditTimeSlot";
import Table from "../components/Table";
import Spinner from "../components/UI/Spinner";
import UsersTable from "../components/UsersTable";
import { useStateContext } from "../contexts/ContextProvider";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  return (
    <div className="pt-[4vh] flex-auto grid place-content-center gap-8 xl:gap-4 grid-cols-1 xl:grid-cols-2 text-white text-7xl">
      <UsersTable />
      <AppointmentsTable />
      {!isEditing && !isAdding && (
        <AvailabilityTable
          selectedSlot={selectedSlot}
          setSelectedSlot={setSelectedSlot}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <EditTimeSlot
          selectedSlot={selectedSlot}
          setSelectedSlot={setSelectedSlot}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      )}

      {isAdding && <AddTimeSlot setIsAdding={setIsAdding} />}

      <ApprovedTable />
    </div>
  );
};

export default Home;
