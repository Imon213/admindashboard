import {
  UilClipboardNotes,
  UilUsersAlt,
  UilAirplay,
  UilChartBar,
  UilUsdSquare,
  UilHome,
  UilClipboardAlt,
  UilCalculatorAlt 
} from "@iconscout/react-unicons";
import img1 from '../imgs/img1.png';
import img2 from '../imgs/img2.png';
import img3 from '../imgs/img3.png';

export const sidebar = [
{icon:UilHome, heading: 'Dashboard'},
{icon: UilClipboardNotes, heading: 'Orders'},
{icon:UilUsersAlt, heading: 'Customers'},
{icon:UilAirplay, heading: 'Products'},
{icon:UilChartBar, heading: 'Analysis'},

];

export const CardData =[
  {
    title: 'Sales',
    color:{
      background:"linear-gradient(180deg,#bb67ff 0%, #c484f3 100%)",
      boxshadow:"0px 10px 20px 0px #e0c6f5",

    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series:[
      {
        name:"sales",
        data: [31,40,28,51,42,109,100],
      },
    ],

  },
  {
    title: "Revenue",
    color:{
      background:"lightGray",
      boxshadow: "0px 10px 20px 0px #F9D598",
    },
    barValue: 80,
    value: '5,270',
    png: UilCalculatorAlt ,
    series:[
      {
        name: "Expenses",
        data: [10,25,15,30,12,15,20],
      },
    ],
  },
  {
    title: "Expenses",
    color:{
      background:"linear-gradient(rgb(248, 212, 154), -146.42%, rgb(255 202 113) -46.42%)",
      boxshadow: "0px 10px 20px 0px #F9D598",
    },
    barValue: 60,
    value: '4,270',
    png: UilClipboardAlt,
    series:[
      {
        name: "Expenses",
        data: [10,25,15,30,12,15,20],
      },
    ],
  },
  

];
export const UpdatesData = [
  {
    img:img1,
    name:"Imon Faysal",
    not1: "has ordered Apple smart watch 2500mh battery",
    time: "25 seconds ago",
  },
  {
    img:img2,
    name:"Sakib Al Hasan",
    not1: "has ordered Apple smart watch 2500mh battery",
    time: "30 seconds ago",
  },
  {
    img:img3,
    name:"Imran Hasan",
    not1: "has ordered Apple smart watch 2500mh battery",
    time: "35 seconds ago",
  }
]