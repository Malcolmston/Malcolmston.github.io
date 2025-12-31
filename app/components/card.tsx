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

export default function Card({title, description, size = Size.Medium, shape = Shape.Rectangle, headerPosition = Position.Top, icon}: CardProps) {
    // Size and shape based dimension classes
    const dimensionClasses = {
        square: {
            small: 'w-[200px] h-[200px]',
            medium: 'w-[280px] h-[280px]',
            large: 'w-[350px] h-[350px]'
        },
        rectangle: {
            small: 'w-[200px] h-[120px]',
            medium: 'w-[280px] h-[160px]',
            large: 'w-[350px] h-[200px]'
        },
        long: {
            small: 'w-full min-h-[100px]',
            medium: 'w-full min-h-[140px]',
            large: 'w-full min-h-[180px]'
        }
    };

    // Size-based padding classes
    const paddingClasses = {
        small: 'p-4',
        medium: 'p-6',
        large: 'p-8'
    };

    // Size-based text classes
    const titleSizeClasses = {
        small: 'text-base',
        medium: 'text-lg',
        large: 'text-xl'
    };

    const descriptionSizeClasses = {
        small: 'text-xs',
        medium: 'text-sm',
        large: 'text-base'
    };

    // Size-based icon classes
    const iconSizeClasses = {
        small: 'text-2xl mb-2',
        medium: 'text-3xl mb-3',
        large: 'text-4xl mb-4'
    };

    // Layout classes based on header position
    const layoutClasses = headerPosition === 'left'
        ? 'flex flex-row items-center gap-4'
        : 'flex flex-col';

    const contentClasses = headerPosition === 'left'
        ? 'flex-1'
        : '';

    const iconContainerClasses = headerPosition === 'left'
        ? 'flex-shrink-0'
        : '';

    return (
        <div className={`
            relative rounded-3xl
            bg-neutral-900
            shadow-[8px_8px_16px_rgba(0,0,0,0.6),-8px_-8px_16px_rgba(255,255,255,0.05)]
            hover:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.6),inset_-8px_-8px_16px_rgba(255,255,255,0.05)]
            transition-all duration-300
            border border-white/5
            ${paddingClasses[size]}
            ${dimensionClasses[shape][size]}
        `}>
            <div className={layoutClasses}>
                {icon && (
                    <div className={`${iconContainerClasses} ${headerPosition === 'top' ? iconSizeClasses[size] : 'text-3xl'}`}>
                        {icon}
                    </div>
                )}
                <div className={contentClasses}>
                    {title && (
                        <h3 className={`font-semibold ${titleSizeClasses[size]} ${headerPosition === 'top' ? 'mb-2' : 'mb-1'}`}>
                            {title}
                        </h3>
                    )}
                    {description && (
                        <p className={`text-neutral-400 ${descriptionSizeClasses[size]} leading-relaxed`}>
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
