import React,{useState} from "react";
import Homepage from "./Homepage";
import Fundraising from "./Fundraising";
import Inbox from "./Inbox";
import SearchItem from "./SearchItem";
import Menu from "./Menu";
import {UsersThree,DotsThreeVertical,CaretRight,CaretLeft, SmileySad, ArrowLeft} from "phosphor-react";

function Calender(){
	const [logo,setLogo] = useState(false);
	const [fund,setFund] = useState(false);
	const [inbox,setInbox] = useState(false);
    const [all,setAll] = useState(false);
    const [date,setDate] = useState(false);

    function onAll(){
        setAll(true)
    }

	function onLogo(){
		setLogo(true)
	}

	function onFund(){
		setFund(true)
	}

	function onInbox(){
		setInbox(true)
	}

	function onDate(){
		setDate(true)
	}

	function onBack(){
		setDate(false)
		setAll(false)
	}

    return(
        <div>
            {
                all?
                <div className="Home">
					<div className="home-top">
						<div className="back">
							<ArrowLeft size={30} color="#1EBA60" weight="duotone" onClick={onBack}/>
							<h1>My Donation (7)</h1>
						</div>
						<div className="home-top">
                            <button className="dot">
                                <DotsThreeVertical size={30} color="#1EBA60" weight="duotone"/>
                            </button>
                        </div>
					</div>
					<SearchItem
						again={true}
						img="search-img"
						title="Help Little Baby Surgery"
						amt="$2,275"
						info="fund raised from $10,310"
						num="4,471"
						txt="Donators"
						num2="9"
						txt2="days left"
						txt3= "$22"
					/>
					<SearchItem
						again={true}
						img="search-img6"
						title="Help Improve Child Health"
						amt="$2, 277"
						info="fund raised from $6,310"
						num="938"
						txt="Donators"
						num2="29"
						txt2="days left"
						txt3= "$26"
					/>
					<SearchItem
						again={true}
						img="search-img8"
						title="Help Victims of Earthquake"
						amt="$2,275"
						info="fund raised from $10,310"
						num="2,475"
						txt="Donators"
						num2="21"
						txt2="days left"
						txt3= "$18"
					/>
					<SearchItem
						again={true}
						img="search-img2"
						title="Help Overcome Malnutrition"
						amt="$8, 775"
						info="fund raised from $7,310"
						num="2,471"
						txt="Donators"
						num2="21"
						txt2="days left"
						txt3= "$30"
					/>
				</div>:
				inbox?
				<Inbox/>:
				fund?
				<Fundraising/>:
				logo?
				<Homepage/>:
                <div className="Home">
                    <div className="home-top">
						<div className="back">
							<UsersThree size={40} color="#1EBA60" weight="duotone" onClick={onLogo}/>
							<h1>My Donation</h1>
						</div>
						<div className="home-top">
                            <button onClick={onDate} className="dot">
                                <DotsThreeVertical size={30} color="#1EBA60" weight="duotone"/>
                            </button>
                        </div>
					</div>
                    <div className="calender">
						<div className="search-txt">
							<h3>December 2023</h3>
							<div>
								<CaretLeft size={20} color="#121212"/>
								<CaretRight size={20} color="#1EBA60" weight="bold" />
							</div>
						</div>
						<table>
							<tbody>
								<tr>
									<th>Mon</th>
									<th>Tue</th>
									<th>Wed</th>
									<th>Thu</th>
									<th>Fri</th>
									<th>Sat</th>
									<th>Sun</th>
								</tr>
								<tr>
									<td>1</td>
									<td>2</td>
									<td>3</td>
									<td>4</td>
									<td>5</td>
									<td>6</td>
									<td>7</td>
								</tr>
								<tr>
									<td>8</td>
									<td>9</td>
									<td>10</td>
									<td>11</td>
									<td>12</td>
									<td>13</td>
									<td>14</td>
								</tr>
								<tr>
									<td>15</td>
									<td>16</td>
									<td>17</td>
									<td>18</td>
									<td>19</td>
									<td>20</td>
									<td>21</td>
								</tr>
								<tr>
									<td>22</td>
									<td className={!date ? "marked" : null}>23</td>
									<td>24</td>
									<td>25</td>
									<td>26</td>
									<td className={date ? "marked" : null}>27</td>
									<td>28</td>
								</tr>
								<tr>
									<td>29</td>
									<td>30</td>
									<td>31</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className={date ? null : "calender-end"}>
						{
							date?
							<div>
								<div className="search-txt">
									<h1>My Donation (7)</h1>
									<p onClick={onAll}>See all</p>
								</div>
								<SearchItem
									again={true}
									img="search-img"
									title="Help Little Baby Surgery"
									amt="$2,275"
									info="fund raised from $10,310"
									num="4,471"
									txt="Donators"
									num2="9"
									txt2="days left"
									txt3= "$22"
								/>
								<SearchItem
									again={true}
									img="search-img2"
									title="Help Overcome Malnutrition"
									amt="$8, 775"
									info="fund raised from $7,310"
									num="2,471"
									txt="Donators"
									num2="21"
									txt2="days left"
									txt3= "$12"
								/>
							</div>:
							<div>
								<div className="search-txt">
									<h1>My Donation (0)</h1>
								</div>
								<div className="great">
									<button className="great-top">
									<SmileySad size={30} color="#ffffff" weight="fill" />
									</button>
									<p>You have not made a donation</p>
									<button className="nxt">Make a Donation Now</button>
								</div>
							</div>
						}
					</div>
					<Menu
						calender={true}
						onHome={onLogo}
						onFund={onFund}
						onInbox={onInbox}
					/>
                </div>
            }
        </div>
    )
}

export default Calender;