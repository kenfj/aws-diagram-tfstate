const default_tfstate = {
    "version": 3,
    "terraform_version": "0.11.11",
    "serial": 8,
    "lineage": "5fdc2195-2b9a-3e69-9e01-eb155a0b5474",
    "modules": [
        {
            "path": [
                "root"
            ],
            "outputs": {
                "address": {
                    "sensitive": false,
                    "type": "string",
                    "value": "terraform-example-elb-1535136651.ap-northeast-1.elb.amazonaws.com"
                }
            },
            "resources": {
                "aws_elb.web": {
                    "type": "aws_elb",
                    "depends_on": [
                        "aws_instance.web",
                        "aws_security_group.elb",
                        "aws_subnet.default"
                    ],
                    "primary": {
                        "id": "terraform-example-elb",
                        "attributes": {
                            "access_logs.#": "0",
                            "arn": "arn:aws:elasticloadbalancing:ap-northeast-1:999999999999:loadbalancer/terraform-example-elb",
                            "availability_zones.#": "1",
                            "availability_zones.249779250": "ap-northeast-1c",
                            "connection_draining": "false",
                            "connection_draining_timeout": "300",
                            "cross_zone_load_balancing": "true",
                            "dns_name": "terraform-example-elb-1535136651.ap-northeast-1.elb.amazonaws.com",
                            "health_check.#": "1",
                            "health_check.0.healthy_threshold": "10",
                            "health_check.0.interval": "30",
                            "health_check.0.target": "TCP:80",
                            "health_check.0.timeout": "5",
                            "health_check.0.unhealthy_threshold": "2",
                            "id": "terraform-example-elb",
                            "idle_timeout": "60",
                            "instances.#": "1",
                            "instances.172108737": "i-0fe8e6bff0d99903d",
                            "internal": "false",
                            "listener.#": "1",
                            "listener.3057123346.instance_port": "80",
                            "listener.3057123346.instance_protocol": "http",
                            "listener.3057123346.lb_port": "80",
                            "listener.3057123346.lb_protocol": "http",
                            "listener.3057123346.ssl_certificate_id": "",
                            "name": "terraform-example-elb",
                            "security_groups.#": "1",
                            "security_groups.2632291435": "sg-0de3c562ecb0bc8a1",
                            "source_security_group": "999999999999/terraform_example_elb",
                            "source_security_group_id": "sg-0de3c562ecb0bc8a1",
                            "subnets.#": "1",
                            "subnets.2212915818": "subnet-03fddbdd329ccc9de",
                            "tags.%": "0",
                            "zone_id": "Z14GRHDCWA56QT"
                        },
                        "meta": {},
                        "tainted": false
                    },
                    "deposed": [],
                    "provider": "provider.aws"
                },
                "aws_instance.web": {
                    "type": "aws_instance",
                    "depends_on": [
                        "aws_key_pair.auth",
                        "aws_security_group.default",
                        "aws_subnet.default"
                    ],
                    "primary": {
                        "id": "i-0fe8e6bff0d99903d",
                        "attributes": {
                            "ami": "ami-07ad4b1c3af1ea214",
                            "arn": "arn:aws:ec2:ap-northeast-1:999999999999:instance/i-0fe8e6bff0d99903d",
                            "associate_public_ip_address": "true",
                            "availability_zone": "ap-northeast-1c",
                            "cpu_core_count": "1",
                            "cpu_threads_per_core": "1",
                            "credit_specification.#": "1",
                            "credit_specification.0.cpu_credits": "standard",
                            "disable_api_termination": "false",
                            "ebs_block_device.#": "0",
                            "ebs_optimized": "false",
                            "ephemeral_block_device.#": "0",
                            "get_password_data": "false",
                            "iam_instance_profile": "",
                            "id": "i-0fe8e6bff0d99903d",
                            "instance_state": "running",
                            "instance_type": "t2.micro",
                            "ipv6_addresses.#": "0",
                            "key_name": "terraform",
                            "monitoring": "false",
                            "network_interface.#": "0",
                            "network_interface_id": "eni-0046a037125a8e025",
                            "password_data": "",
                            "placement_group": "",
                            "primary_network_interface_id": "eni-0046a037125a8e025",
                            "private_dns": "ip-10-0-1-55.ap-northeast-1.compute.internal",
                            "private_ip": "10.0.1.55",
                            "public_dns": "",
                            "public_ip": "3.112.58.95",
                            "root_block_device.#": "1",
                            "root_block_device.0.delete_on_termination": "true",
                            "root_block_device.0.iops": "100",
                            "root_block_device.0.volume_id": "vol-067544a2b7db97c09",
                            "root_block_device.0.volume_size": "8",
                            "root_block_device.0.volume_type": "gp2",
                            "security_groups.#": "0",
                            "source_dest_check": "true",
                            "subnet_id": "subnet-03fddbdd329ccc9de",
                            "tags.%": "0",
                            "tenancy": "default",
                            "volume_tags.%": "0",
                            "vpc_security_group_ids.#": "1",
                            "vpc_security_group_ids.3793604824": "sg-054d2dcab8356fc33"
                        },
                        "meta": {
                            "e2bfb730-ecaa-11e6-8f88-34363bc7c4c0": {
                                "create": 600000000000,
                                "delete": 1200000000000,
                                "update": 600000000000
                            },
                            "schema_version": "1"
                        },
                        "tainted": false
                    },
                    "deposed": [],
                    "provider": "provider.aws"
                },
                "aws_internet_gateway.default": {
                    "type": "aws_internet_gateway",
                    "depends_on": [
                        "aws_vpc.default"
                    ],
                    "primary": {
                        "id": "igw-03893a7a47d1933e8",
                        "attributes": {
                            "id": "igw-03893a7a47d1933e8",
                            "owner_id": "999999999999",
                            "tags.%": "0",
                            "vpc_id": "vpc-08d6d49354cefdbbc"
                        },
                        "meta": {},
                        "tainted": false
                    },
                    "deposed": [],
                    "provider": "provider.aws"
                },
                "aws_key_pair.auth": {
                    "type": "aws_key_pair",
                    "depends_on": [],
                    "primary": {
                        "id": "terraform",
                        "attributes": {
                            "fingerprint": "41:15:cb:d1:89:d2:12:8b:8e:26:42:3d:33:f0:99:97",
                            "id": "terraform",
                            "key_name": "terraform",
                            "public_key": "ssh-rsa xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx your_email@example.com"
                        },
                        "meta": {
                            "schema_version": "1"
                        },
                        "tainted": false
                    },
                    "deposed": [],
                    "provider": "provider.aws"
                },
                "aws_route.internet_access": {
                    "type": "aws_route",
                    "depends_on": [
                        "aws_internet_gateway.default",
                        "aws_vpc.default"
                    ],
                    "primary": {
                        "id": "r-rtb-0532f0359da05fed31080289494",
                        "attributes": {
                            "destination_cidr_block": "0.0.0.0/0",
                            "destination_prefix_list_id": "",
                            "egress_only_gateway_id": "",
                            "gateway_id": "igw-03893a7a47d1933e8",
                            "id": "r-rtb-0532f0359da05fed31080289494",
                            "instance_id": "",
                            "instance_owner_id": "",
                            "nat_gateway_id": "",
                            "network_interface_id": "",
                            "origin": "CreateRoute",
                            "route_table_id": "rtb-0532f0359da05fed3",
                            "state": "active",
                            "transit_gateway_id": "",
                            "vpc_peering_connection_id": ""
                        },
                        "meta": {
                            "e2bfb730-ecaa-11e6-8f88-34363bc7c4c0": {
                                "create": 120000000000,
                                "delete": 300000000000
                            }
                        },
                        "tainted": false
                    },
                    "deposed": [],
                    "provider": "provider.aws"
                },
                "aws_security_group.default": {
                    "type": "aws_security_group",
                    "depends_on": [
                        "aws_vpc.default"
                    ],
                    "primary": {
                        "id": "sg-054d2dcab8356fc33",
                        "attributes": {
                            "arn": "arn:aws:ec2:ap-northeast-1:999999999999:security-group/sg-054d2dcab8356fc33",
                            "description": "Used in the terraform",
                            "egress.#": "1",
                            "egress.482069346.cidr_blocks.#": "1",
                            "egress.482069346.cidr_blocks.0": "0.0.0.0/0",
                            "egress.482069346.description": "",
                            "egress.482069346.from_port": "0",
                            "egress.482069346.ipv6_cidr_blocks.#": "0",
                            "egress.482069346.prefix_list_ids.#": "0",
                            "egress.482069346.protocol": "-1",
                            "egress.482069346.security_groups.#": "0",
                            "egress.482069346.self": "false",
                            "egress.482069346.to_port": "0",
                            "id": "sg-054d2dcab8356fc33",
                            "ingress.#": "2",
                            "ingress.2165049311.cidr_blocks.#": "1",
                            "ingress.2165049311.cidr_blocks.0": "10.0.0.0/16",
                            "ingress.2165049311.description": "",
                            "ingress.2165049311.from_port": "80",
                            "ingress.2165049311.ipv6_cidr_blocks.#": "0",
                            "ingress.2165049311.prefix_list_ids.#": "0",
                            "ingress.2165049311.protocol": "tcp",
                            "ingress.2165049311.security_groups.#": "0",
                            "ingress.2165049311.self": "false",
                            "ingress.2165049311.to_port": "80",
                            "ingress.2541437006.cidr_blocks.#": "1",
                            "ingress.2541437006.cidr_blocks.0": "0.0.0.0/0",
                            "ingress.2541437006.description": "",
                            "ingress.2541437006.from_port": "22",
                            "ingress.2541437006.ipv6_cidr_blocks.#": "0",
                            "ingress.2541437006.prefix_list_ids.#": "0",
                            "ingress.2541437006.protocol": "tcp",
                            "ingress.2541437006.security_groups.#": "0",
                            "ingress.2541437006.self": "false",
                            "ingress.2541437006.to_port": "22",
                            "name": "terraform_example",
                            "owner_id": "999999999999",
                            "revoke_rules_on_delete": "false",
                            "tags.%": "0",
                            "vpc_id": "vpc-08d6d49354cefdbbc"
                        },
                        "meta": {
                            "e2bfb730-ecaa-11e6-8f88-34363bc7c4c0": {
                                "create": 600000000000,
                                "delete": 600000000000
                            },
                            "schema_version": "1"
                        },
                        "tainted": false
                    },
                    "deposed": [],
                    "provider": "provider.aws"
                },
                "aws_security_group.elb": {
                    "type": "aws_security_group",
                    "depends_on": [
                        "aws_vpc.default"
                    ],
                    "primary": {
                        "id": "sg-0de3c562ecb0bc8a1",
                        "attributes": {
                            "arn": "arn:aws:ec2:ap-northeast-1:999999999999:security-group/sg-0de3c562ecb0bc8a1",
                            "description": "Used in the terraform",
                            "egress.#": "1",
                            "egress.482069346.cidr_blocks.#": "1",
                            "egress.482069346.cidr_blocks.0": "0.0.0.0/0",
                            "egress.482069346.description": "",
                            "egress.482069346.from_port": "0",
                            "egress.482069346.ipv6_cidr_blocks.#": "0",
                            "egress.482069346.prefix_list_ids.#": "0",
                            "egress.482069346.protocol": "-1",
                            "egress.482069346.security_groups.#": "0",
                            "egress.482069346.self": "false",
                            "egress.482069346.to_port": "0",
                            "id": "sg-0de3c562ecb0bc8a1",
                            "ingress.#": "1",
                            "ingress.2214680975.cidr_blocks.#": "1",
                            "ingress.2214680975.cidr_blocks.0": "0.0.0.0/0",
                            "ingress.2214680975.description": "",
                            "ingress.2214680975.from_port": "80",
                            "ingress.2214680975.ipv6_cidr_blocks.#": "0",
                            "ingress.2214680975.prefix_list_ids.#": "0",
                            "ingress.2214680975.protocol": "tcp",
                            "ingress.2214680975.security_groups.#": "0",
                            "ingress.2214680975.self": "false",
                            "ingress.2214680975.to_port": "80",
                            "name": "terraform_example_elb",
                            "owner_id": "999999999999",
                            "revoke_rules_on_delete": "false",
                            "tags.%": "0",
                            "vpc_id": "vpc-08d6d49354cefdbbc"
                        },
                        "meta": {
                            "e2bfb730-ecaa-11e6-8f88-34363bc7c4c0": {
                                "create": 600000000000,
                                "delete": 600000000000
                            },
                            "schema_version": "1"
                        },
                        "tainted": false
                    },
                    "deposed": [],
                    "provider": "provider.aws"
                },
                "aws_subnet.default": {
                    "type": "aws_subnet",
                    "depends_on": [
                        "aws_vpc.default"
                    ],
                    "primary": {
                        "id": "subnet-03fddbdd329ccc9de",
                        "attributes": {
                            "arn": "arn:aws:ec2:ap-northeast-1:999999999999:subnet/subnet-03fddbdd329ccc9de",
                            "assign_ipv6_address_on_creation": "false",
                            "availability_zone": "ap-northeast-1c",
                            "availability_zone_id": "apne1-az1",
                            "cidr_block": "10.0.1.0/24",
                            "id": "subnet-03fddbdd329ccc9de",
                            "ipv6_cidr_block": "",
                            "ipv6_cidr_block_association_id": "",
                            "map_public_ip_on_launch": "true",
                            "owner_id": "999999999999",
                            "tags.%": "0",
                            "vpc_id": "vpc-08d6d49354cefdbbc"
                        },
                        "meta": {
                            "e2bfb730-ecaa-11e6-8f88-34363bc7c4c0": {
                                "create": 600000000000,
                                "delete": 600000000000
                            },
                            "schema_version": "1"
                        },
                        "tainted": false
                    },
                    "deposed": [],
                    "provider": "provider.aws"
                },
                "aws_vpc.default": {
                    "type": "aws_vpc",
                    "depends_on": [],
                    "primary": {
                        "id": "vpc-08d6d49354cefdbbc",
                        "attributes": {
                            "arn": "arn:aws:ec2:ap-northeast-1:999999999999:vpc/vpc-08d6d49354cefdbbc",
                            "assign_generated_ipv6_cidr_block": "false",
                            "cidr_block": "10.0.0.0/16",
                            "default_network_acl_id": "acl-0e5636a281442fc21",
                            "default_route_table_id": "rtb-0532f0359da05fed3",
                            "default_security_group_id": "sg-0e4a3c5411d6b9b33",
                            "dhcp_options_id": "dopt-666d7c03",
                            "enable_classiclink": "false",
                            "enable_classiclink_dns_support": "false",
                            "enable_dns_hostnames": "false",
                            "enable_dns_support": "true",
                            "id": "vpc-08d6d49354cefdbbc",
                            "instance_tenancy": "default",
                            "ipv6_association_id": "",
                            "ipv6_cidr_block": "",
                            "main_route_table_id": "rtb-0532f0359da05fed3",
                            "owner_id": "999999999999",
                            "tags.%": "0"
                        },
                        "meta": {
                            "schema_version": "1"
                        },
                        "tainted": false
                    },
                    "deposed": [],
                    "provider": "provider.aws"
                }
            },
            "depends_on": []
        }
    ]
}
