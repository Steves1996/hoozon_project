import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
    Typography,
    Card,
    CardHeader,
    CardBody,
} from "@material-tailwind/react";
import DataTable from "react-data-table-component";
import { FaLongArrowAltLeft } from "react-icons/fa";


export function UserDetails({ closeModal, userData }) {

    const columns = [
        {
            name: 'Nom & Prénom',
            selector: row => row.title,
        },
        {
            name: 'Pseudo',
            selector: row => row.year,
            sortable: true,
        },
        {
            name: 'Image',
            selector: row => row.year,
            sortable: true,
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
        <div className="mt-9">

            <button
                onClick={() => closeModal(false)}
                className="inline-flex items-center justify-center gap-2.5 rounded-md bg-primary py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
                <FaLongArrowAltLeft />
                Retour
            </button>

            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
                <Card>
                    <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
                        <Typography variant="h6" color="white">
                            Enregistrement Facebook {userData}
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
                </Card>


                <Card>
                    <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
                        <Typography variant="h6" color="white">
                            Enregistrement Instagram
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
                </Card>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
                <Card>
                    <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
                        <Typography variant="h6" color="white">
                            Enregistrement Twiteer
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
                </Card>


                <Card>
                    <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
                        <Typography variant="h6" color="white">
                            Enregistrement Tiktok
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
                </Card>
            </div>
        </div>
    );

}


export default UserDetails;