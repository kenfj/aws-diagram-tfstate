include "mxgraph_defs";

{
    mxGraphModel: {
        root: {
            mxCell: ([
                { "-id": 0 },
                { "-id": 1, "-parent": 0 }
            ] + [ .modules[].resources | to_entries[] |
                if .value.type == "aws_instance" then
                    mxVertex(
                        .value.primary.id;
                        .key + "<br>(" + .value.primary.attributes.private_ip + ")<br>"
                            + .value.primary.attributes.public_ip;
                        .value.primary.attributes.subnet_id;
                        80; 80
                    ),
                    mxEdge(.value.primary.id; .value.primary.attributes.subnet_id; "")
                else if .value.type == "aws_elb" then
                    mxVertex(
                        .value.primary.id;
                        .key + "<br>[" + (
                            if .value.primary.attributes.internal == "false"
                                then "public" else "private" end
                                + "]");
                        (.value.primary.attributes | to_entries[]
                            | select(.value|startswith("subnet-")) | .value);
                        80; 80),
                    mxEdge(
                        (.value.primary.attributes | to_entries[]
                            | select(.value|startswith("i-")) | .value);
                        .value.primary.id; ""),
                    mxEdge(
                        .value.primary.id;
                        (.value.primary.attributes | to_entries[]
                            | select(.value|startswith("subnet-")) | .value);
                        "")
                else if .value.type == "aws_alb" or .value.type == "aws_lb" then
                    mxVertex(.value.primary.id; .key; .value.primary.attributes.vpc_id; 80; 80),
                    mxEdge(.value.primary.id; .value.primary.attributes.vpc_id; "")
                else if .value.type == "aws_internet_gateway" then
                    mxVertex(.value.primary.id; .key; .value.primary.attributes.vpc_id; 80; 80),
                    mxEdge(.value.primary.id; .value.primary.attributes.vpc_id; "")
                else if .value.type == "aws_nat_gateway" then
                    mxVertex(.value.primary.id; .key; .value.primary.attributes.subnet_id; 80; 80),
                    mxEdge(.value.primary.id; .value.primary.attributes.subnet_id; "")
                else if .value.type == "aws_db_instance" then
                    mxVertex(
                        .value.primary.id;
                        .key + " [" + .value.primary.attributes.availability_zone + "]<br>"
                             + "(" + .value.primary.attributes.engine + ")";
                        .value.primary.attributes.db_subnet_group_name;
                        80; 80
                    ),
                    mxEdge(.value.primary.id; .value.primary.attributes.db_subnet_group_name; "")
                else if .value.type == "aws_db_subnet_group" then
                    mxVertex(
                        .value.primary.id;
                        .key;
                        (.value.primary.attributes | to_entries[]
                            | select(.value|startswith("subnet-")) | .value);
                        160; 80
                    ),
                    mxEdge(
                        .value.primary.id;
                        (.value.primary.attributes | to_entries[]
                            | select(.value|startswith("subnet-")) | .value);
                        "")
                else if .value.type == "aws_ecr_repository" then
                    mxVertex(
                        .value.primary.id;
                        .key + " [" + (.value.primary.attributes.arn
                                | ltrimstr("arn:aws:ecr:") | split(":")[0]) + "]<br>"
                            + "(" + .value.primary.attributes.repository_url + ")";
                        1;
                        180; 80)
                else if .value.type == "aws_ecs_cluster" then
                    mxVertex(
                        .value.primary.id;
                        .key + " [" + (.value.primary.attributes.arn
                                | ltrimstr("arn:aws:ecs:") | split(":")[0]) + "]<br>"
                            + "(" + .value.primary.attributes.name + ")";
                        1;
                        180; 80)
                else if .value.type == "aws_subnet" then
                    mxVertex(
                        .value.primary.id;
                        .key + " [" + .value.primary.attributes.availability_zone + "]<br>"
                             + "(" + .value.primary.attributes.cidr_block + ")";
                        .value.primary.attributes.vpc_id;
                        230; 80
                    ),
                    mxEdge(.value.primary.id; .value.primary.attributes.vpc_id; "")
                else if .value.type == "aws_vpc" then
                    mxVertex(
                        .value.primary.id;
                        .key + " [" + (.value.primary.attributes.arn
                                | ltrimstr("arn:aws:ec2:") | split(":")[0]) + "]<br>"
                            + "(" + .value.primary.attributes.cidr_block + ")";
                        1;
                        300; 80)
                else if .value.type == "aws_s3_bucket" then
                    mxVertex(.value.primary.id; .key; 1; 80; 80)
                else empty
                # add end here everytime you add if statement
                end end end end end end end end end end end end
            ])
        }
    }
}
