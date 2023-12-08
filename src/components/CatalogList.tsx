import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface CatalogListProps {
    images: string;
    name?: string;
    content?: string;
    button?: string;
}

const CatalogList = ({ images, name, content, button }: CatalogListProps) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 260 }}
                image={images || "vòng tay"}
                title={name || "green iguana"}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                {content && <Typography>{content}</Typography>}
            </CardContent>
            <CardActions>
                <Button size="small">{button || "shop"}</Button>
            </CardActions>
        </Card>
    );
};

export default CatalogList;
