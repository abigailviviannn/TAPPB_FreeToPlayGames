import React from "react";
import "./profile.css";

export default function ProfilePage() {
    return (
        <main>
            <div class="container">
                <h2>Profile</h2>

                <column>
                <div class="img-wrapper">
                <img src="https://pbs.twimg.com/media/F_1sPvXagAEF7AJ?format=jpg&name=medium" alt="Foto Profil" />
                </div>

                <div class="identity">
                <p>Nama: Abigail Vivian</p>
                <p>NIM: 21120121130083</p>
                </div>
                </column>

            </div>
        </main>
    );
}
