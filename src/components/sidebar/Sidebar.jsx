import "./sidebar.css";
import { useState, useEffect } from "react";
import axios from "axios";
import {Link } from "react-router-dom";

const Sidebar = () => {
	const [cats,setCats] = useState([]);

	useEffect(()=>{
		const getCats = async ()=>
		{
			const res = await axios.get("/categories")
			setCats(res.data)
		};
		getCats();
	},[]);
    return (
        <div className="sidebar">
            <div className="sidebarItem">
				<span className="sidebarTitle"> ABOUT ME </span>
				<img className="simg"
					src="https://plus.unsplash.com/premium_photo-1663853560438-6cc3a70a3c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
					alt=""
				/>
				<p className="sp">
					Magna consequat officia magna nulla excepteur qui. Ut aliqua deserunt
					velit irure minim id qui enim eu reprehenderit laboris laborum
					consequat. Id fugiat quis deserunt irure excepteur deserunt proident
					id. Exercitation consectetur incididunt est nulla. Veniam laboris
					eiusmod amet nisi sit elit ipsum culpa id duis duis excepteur. Est
					magna duis mollit magna nisi velit deserunt voluptate ullamco dolor
					ut.
				</p>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">CATEGORIES</span>
				<ul className="sidebarList">
					{cats.map((c)=>(
						<Link to={`/?cat=$(c.name)`} className="link">
						<li className="sidebarListItem">{c.name}</li>		
						</Link>
					))}
				</ul>
			</div>
			<div className="sidebarItem">
			<span className="sidebarTitle">FOLLOW US</span>
			<div className="sidebarSocial">
				<i className="sidebarIcon fab fa-facebook-square"></i>
				<i className="sidebarIcon fa-brands fa-square-twitter"></i>
				<i className="sidebarIcon fa-brands fa-square-pinterest"></i>
				<i className="sidebarIcon fa-brands fa-square-instagram"></i>
			</div>
			</div>
		</div>
	);
};

export default Sidebar;
