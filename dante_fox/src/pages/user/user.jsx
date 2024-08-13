
import DataTable from "react-data-table-component";
import { Link, useNavigate } from "react-router-dom";
import {
    Typography,
    Card,
    CardHeader,
    CardBody,
} from "@material-tailwind/react";
import { useState } from "react";
import { UserDetails } from ".";

export function User() {
    const [seeMore, setSeeMore] = useState();

    const [showuserDatails, setShowuserDatails] = useState(false);

    const handleButtonClickToSeeDetails = (data) => {
        setShowuserDatails(!showuserDatails);
        setSeeMore(data)
        console.log("data title: ", data);
    };


    const columns = [
        {
            name: 'Nom & Prénom',
            selector: row => row.title,
        },
        {
            name: 'Nbr Facebook',
            selector: row => row.year,
            sortable: true,
        },
        {
            name: 'Nbr Instagram',
            selector: row => row.year,
            sortable: true,
        },

        {
            name: 'Nbr Tiktok',
            selector: row => row.year,
            sortable: true,
        },
        {
            name: 'Nbr Twitter',
            selector: row => row.year,
            sortable: true,
        },
        {
            name: "Action",
            selector: (row) => (
                <button
                    onClick={() => handleButtonClickToSeeDetails(row.id)}
                    className="inline-flex items-center justify-center rounded-md border border-primary py-2 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                    Détails
                </button>
            ),
        },
    ];

    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]


    return (
        <div className="mt-12">
            {showuserDatails ? <UserDetails closeModal={handleButtonClickToSeeDetails} userData={seeMore} /> : <Card>
                <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
                    <Typography variant="h6" color="white">
                        Liste des commerciaux
                    </Typography>
                </CardHeader>
                <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                    <DataTable
                        columns={columns}
                        data={data}
                        pagination
                        customStyles={{
                            headCells: {
                                style: {
                                    fontSize: "15px",
                                    fontWeight: "bold",
                                    color: "#000",
                                },
                            },
                        }}
                    />
                </CardBody>
            </Card>}
        </div>
    );
}

export default User;