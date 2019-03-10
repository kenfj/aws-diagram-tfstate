def mxVertexGeo(width; height):
{
    "-width": width,
    "-height": height,
    "-as": "geometry"
};

def mxVertex(id; value; parent; width; height):
{
    "-id": id,
    "-value": value 
        | ltrimstr("aws_")
        | sub("db_instance"; "RDS")
        | sub("instance"; "EC2")
        | sub("s3_bucket"; "S3")
        | sub("elb"; "ELB")
        | sub("alb"; "ALB")
        | sub("lb"; "ALB")
        | sub("vpc"; "VPC")
        | sub("nat_gateway"; "NGW")
        | sub("internet_gateway"; "IGW")
        | sub(".default"; "")
        | sub(".this"; ""),
    "-vertex": 1,
    "-parent": parent,
    "mxGeometry": mxVertexGeo(width; height)
};

def mxEdgeGeo:
{
    "-relative": 1,
    "-as": "geometry"
};

def mxEdge(source; target; value):
{
    "-value": value,
    "-edge": 1,
    "-parent": 1,
    "-source": source,
    "-target": target,
    "mxGeometry": mxEdgeGeo
};

