import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import Card from "../components/cardcategory";


export default function Racing() {
    const [data, setData] = useState(null);
    const [isLoaded, setisLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [query] = useState("Racing");
    const nav = useNavigate();

    useEffect(() => {
        const fetchData = async (query) => {
            setIsLoading(true);
            try {
                const response = await axios.get(
                    "https://free-to-play-games-database.p.rapidapi.com/api/games", {
                    params: { category: query },
                    headers: {
                        'X-RapidAPI-Key': '21e83afa83msha06ac3fd2a4d763p149d2ejsn4b3a6251466e',
                        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                    },
                }
                );
                if (response.status === 200) {
                    setData(response.data);
                    setisLoaded(true);
                    setIsLoading(false);
                }
            } catch (err) {
                console.log(err);
                setIsLoading(false);
            }
        };
        if (!isLoaded) {
            fetchData(query);
        }
    }, [isLoaded, query]);

    const handleClick = (item) => {
        navToDetail(item);
    };
    const navToDetail = (item) => {
        nav(`/detail/${item.id}`, { state: { itemData: item } });

    };
    return (
        <main>
            {/* <input
                type="text"
                placeholder="Search games by platform"
                onKeyDown={(e) => onSearch(e)}
            /> */}
            <h3 className="title">Racing</h3>
            {!data || isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="card-container">
                    {data.map((item, index) => {
                        return (
                            <Card data={item} key={index} onClick={() => handleClick(item)} />
                        );
                    })}
                </div>
            )}

        </main>
    );
}