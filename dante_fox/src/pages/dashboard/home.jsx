import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { StatisticsCard } from "@/widgets/cards";
import { FaChalkboardUser } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";
import { TbBrandFacebook } from "react-icons/tb";
import { RiTwitterXFill } from "react-icons/ri";
import { PiTiktokLogoLight } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import DataTable from "react-data-table-component";



export function Home() {

  const columns = [
    {
      name: 'Nom & Prénom',
      selector: row => row.title,
    },
    {
      name: 'Nombre',
      selector: row => row.year,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <Link
          to="#"
          state={row}
          className="inline-flex items-center justify-center rounded-md border border-primary py-2 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          <button>Détails</button>
        </Link>
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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 mb-10">
        <StatisticsCard
          title="Nombre de commercial"
          value="45"
          icon={React.createElement(FaChalkboardUser, {
            className: "w-6 h-6 text-white",
          })}
        />
        <StatisticsCard
          title="Nombre de Manager"
          value="45"
          icon={React.createElement(GrUserManager, {
            className: "w-6 h-6 text-white",
          })}
        />
        <StatisticsCard
          title="Nombre d'abonner Facebook"
          value="45"
          icon={React.createElement(TbBrandFacebook, {
            className: "w-6 h-6 text-white",
          })}
        />
        <StatisticsCard
          title="Nombre d'abonner Twitter"
          value="45"
          icon={React.createElement(RiTwitterXFill, {
            className: "w-6 h-6 text-white",
          })}
        />
        <StatisticsCard
          title="Nombre d'abonner Tiktok"
          value="45"
          icon={React.createElement(PiTiktokLogoLight, {
            className: "w-6 h-6 text-white",
          })}
        />

        <StatisticsCard
          title="Nombre d'abonner Instagram"
          value="45"
          icon={React.createElement(FaInstagram, {
            className: "w-6 h-6 text-white",
          })}
        />
      </div>
      <hr />
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              Meilleur commercial Facebook
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
              Meilleur commercial Instagram
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
              Meilleur commercial Twiteer
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
              Meilleur commercial Tiktok
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

export default Home;
