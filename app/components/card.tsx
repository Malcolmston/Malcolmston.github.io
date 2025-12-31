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
    children?: React.ReactNode;
    id?: string;
}

/**
 * Renders a customizable Card component with configurable title, description, size, shape, header position, and icon.
 *
 * @param {Object} props - Props object for the Card component.
 * @param {string} props.title - The title text displayed on the card.
 * @param {string} props.description - The description text displayed on the card.
 * @param {string} [props.size=Size.Medium] - The size of the card. Can be "small", "medium", or "large".
 * @param {string} [props.shape=Shape.Rectangle] - The shape of the card. Can be "square", "rectangle", or "long".
 * @param {string} [props.headerPosition=Position.Top] - Position of the header within the card. Can be "top" or "left".
 * @param {ReactNode} props.icon - Optional icon component to be displayed within the card.
 *
 * @return {JSX.Element} The rendered Card component.
 */
export default function Card({title, description, size = Size.Medium, shape = Shape.Rectangle, headerPosition = Position.Top, icon, children, id}: CardProps) {
    // Size and shape based dimension classes
    const dimensionClasses = {
        square: {
            small: 'w-[200px] h-[200px]',
            medium: 'w-[280px] h-[280px]',
            large: 'w-[350px] h-[350px]'
        },
        rectangle: {
            small: 'w-[200px] min-h-[120px]',
            medium: 'w-[280px] min-h-[140px]',
            large: 'w-[350px] min-h-[160px]'
        },
        long: {
            small: 'w-full min-h-[80px]',
            medium: 'w-full min-h-[100px]',
            large: 'w-full min-h-[120px]'
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
        <div
            id={id}
            className={`
            relative rounded-3xl
            bg-neutral-900
            shadow-[8px_8px_16px_rgba(0,0,0,0.6),-8px_-8px_16px_rgba(255,255,255,0.05)]
            hover:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.6),inset_-8px_-8px_16px_rgba(255,255,255,0.05)]
            transition-all duration-300
            border border-white/5
            overflow-hidden
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
                    {children && (
                        <div className="mt-4">
                            {children}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
