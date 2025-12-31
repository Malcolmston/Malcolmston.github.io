'use client';

import React from "react";

import Size from "@/app/components/size";
import Shape from "@/app/components/shape";
import Position from "@/app/components/possition";

interface CardProps {
    title?: string;
    description?: string;
    size?: Size;
    shape?: Shape;
    headerPosition?: Position;
    icon?: React.ReactNode;
}
