# BLT__Final-Case_Study


### Running Ports
- 3000: client -- /?(.*)
- 3500: query service -- /orders
- 4000: orders service -- /orders/create
- 4001: tickets service -- /tickets
- 4002: payments service -- /payments
- 4003: moderation service -- /moderation
- 4005: event-bus service --/events
- 5000: auth-service -- /auth

# Docker & Kubernetes commands
- Is Docker desktop is installed? Is Kubernetes checked?
- Is kubectl.exe added to your system Path variable?

### Build & Run Docker Images
- FOR EACH SERVICE
-- cd /service-x
-- docker build -t container-x . 
-- docker run -p container-x
-- kubectl apply -f xxxxxxx-depl.yml

### Run Kubernetes Pod
-- kubectl run client --image=client:latest
-- kubectl run native-client --image=native-client:latest
-- kubectl run api --image=ingress-svc:latest

# Pair your host computer port with the host port
- This will output the external IP
-- kubectl get service xxxxx --watch