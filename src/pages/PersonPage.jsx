import axios from "axios";
import React, { useState } from "react";

const PersonPage = () => {
    const [listPerson, setListPerson] = useState();

    const handleDataPerson = async () => {
        const response = await axios.get("");
    };
    return <div></div>;
};

export default PersonPage;
