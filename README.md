# Emergix - Frontend (AppSmith)

> [AppSmith](https://www.appsmith.com/) is a dynamic solution built to simplify workflows and enhance productivity for businesses and teams. This platform integrates essential tools into an intuitive interface, enabling seamless collaboration, automation, and data management to drive efficiency and success.

---

## Demo

- [Link](http://34.67.28.143/app/olp-oss-application/dashboard-674b5eaa29bd2146155b36c8?branch=master)

---

## Getting Started

### Prerequisites
List any software/tools that need to be installed before using the repository:
- Appsmith (Cloud or Self-hosted)
- Node.js (if applicable)
- Docker (optional)

### Installation

Follow these steps to set up the project:

1. **Install Appsmith** 
   If you don’t have Appsmith installed yet, choose one of the following methods:
   - **Cloud**: Sign up for a free account at [Appsmith Cloud](https://www.appsmith.com/).
   - **Self-hosted**: Follow the [official installation guide](https://docs.appsmith.com/getting-started/setup/installation-guides) to install Appsmith on your local machine or server using Docker or Kubernetes.

2. **Clone the Repository**
   Clone this repository to your local machine:
   ```bash
   git clone https://github.com/vku-open-source/lcdp-ui.git
   cd lcdp-ui
   ```
   
3. **Import the Appsmith application**
You can choose one of the below ways to import an Appsmith application:
    - Import from an application JSON file
    - Import from a Git Repository
 
    a. **Import from a application JSON file**

    1. Go to your workspace homepage and navigate to the menu button of the workspace.
    2. Click the menu button (next to +NEW) and select the "Import" option. 
    3. In the import pop-up window, click on import from file and pick the JSON file `export.json`. 
    4. Once the file is imported, you can see a datasource configuration Modal (if the imported app had a datasource connection) where you can configure the datasources used by the imported application.

    b. **Import from a Git Repository**

    - Firstly you should folk this repository
    - Then follow the (detail tutorial)[https://docs.appsmith.com/advanced-concepts/version-control-with-git/import-from-repository] to import from a Git repository
    
4. **Test the application**

- Open the imported application in Appsmith
- Choose "Edit" to edit the application
- Or choose "Launch" to test the application

## Contributing

Outline guidelines for contributing to the project:

1. Fork the repostiory
2. Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3. Cmmoit changes and push:
    ```bash
    git push origin feature-name
    ```
4. Submit a pull request
