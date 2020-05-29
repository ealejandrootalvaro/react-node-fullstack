import React from 'react';
import Button from '@material-ui/core/Button';

interface Props {
    color?: "primary" | "secondary"
    type: "button" | "submit"
    variant?: "contained"
    children: string
    disabled: boolean
    className?: string
}

export default function ButtonComponent(props: Props) {
    return (
        <Button {...props}>{props.children}</Button>
    )
}