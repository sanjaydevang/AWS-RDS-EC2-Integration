# AWS-RDS-EC2-Integration

# AWS RDS with EC2 Integration Project

This project demonstrates how to set up an AWS RDS instance and connect it with an EC2 instance. It includes creating a simple Node.js application that performs CRUD operations on an RDS MySQL database.

## Prerequisites
- AWS account with necessary permissions.
- An EC2 instance (Amazon Linux 2).
- Node.js and MySQL client installed on EC2.
- Security groups configured correctly to allow connectivity between EC2 and RDS.

## Steps

### Step 1: Set Up the RDS MySQL Instance
1. **Navigate to the RDS Console** in the AWS Management Console.
2. **Create a new MySQL Database**:
   - Choose "Standard create" and select MySQL as the engine.
   - Use "Free Tier" as the template.
3. **Configure Database**:
   - Set a unique database name, username, and password.
   - Ensure "Publicly accessible" is set to **Yes**.
4. **Security Group**:
   - Create a new security group that allows inbound MySQL traffic (port 3306) from the EC2 security group.

### Step 2: Configure EC2 Security Group
1. In the **EC2 Console**, find the security group attached to your EC2 instance.
2. Add an **Inbound Rule** to allow MySQL/Aurora traffic from the RDS security group.

### Step 3: Connect to the RDS Instance from EC2
1. SSH into your EC2 instance:
   ```bash
   ssh -i path/to/your-key.pem ec2-user@<EC2-Public-IP>
