import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

export default function Resume() {

    return (
        <div>
            <h1>Resume</h1>
            <Link to="/about">About</Link>
        </div>
    );
}