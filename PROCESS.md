# Instance 1: Identify a problem or inefficiency in a process related to quality or development, and implemented a change to improve it

## Problem Identification
During routine test cycles, the automation QA observed that the execution time for the entire suite of automated tests was significantly increasing with each sprint. This was causing delays in feedback for developers and hindering the continuous integration process. 

## Root Cause Analysis
1. **Test Redundancy**: Multiple tests were covering the same functionality, leading to unnecessary duplication.
2. **Inefficient Test Cases**: Some test cases were not optimized, resulting in longer execution times.
3. **Resource Bottlenecks**: Limited parallel execution due to resource constraints.

## Implemented Change
1. **Test Case Review and Optimization**:
   - Conducted a comprehensive review of the test suite and eliminate redundant tests.
   - Refactored test cases to ensure they were efficient and covered the required functionality.

2. **Test Parallelization**
   - Configure the CI/CD pipeline to support parallel execution, significantly reducing overall test execution time.

3. **Resource Scaling**:
   - Implemented a strategy to spin up additional resources during peak testing periods and scale down during off-peak times.

4. **Continuous Monitoring and Reporting**:
   - Set up monitoring to track the performance of the test suite and identify any slow-running tests.
   - Automated the reporting process to provide real-time feedback on test execution times and success rates to the development team.


##
# Instance 2: Built or implemented new testing tool or framework

## Problem Identification
The existing testing framework lacked the capabilities needed to efficiently handle the growing complexity of the software. This resulted in:
- Slow test execution times due to multiple HTTP requests which takes time.
- Test execution needs a user and in order to make a user, multiple requests are required.

## Implemented Change

Created a tool named `test-user` which allows QA Engineers to create a user and save them into a DB which can be later consumed by tests in order to save time by making a single request instead of multiple requests.

##
# Instance 3: Made changes to prevent defects from occurring or improve the quality before reaching the testing stage

## Problem Identification
The team noticed a high number of defects being reported during the testing phase, leading to increased rework and delayed release cycles.

## Solution: Implementing Preventative Measures and Early Quality Improvements

### Objectives
1. **Shift Left Testing**: Incorporate testing earlier in the development lifecycle to catch defects sooner.
2. **Enhance Code Quality**: Implement practices and tools to improve code quality before it reaches the testing stage.
3. **Promote Collaboration**: Foster better collaboration between developers and QA to identify and address potential issues early.

### Implemented Changes

#### 1. Static Code Analysis
- **Tool Selection**: Integrated static code analysis tools like SonarQube and ESLint into the development process.
- **Configuration**: Configured these tools to run automatically on every code commit to the repository.
- **Quality Gates**: Set up quality gates to enforce coding standards and detect potential bugs, code smells, and security vulnerabilities.

#### 2. Code Reviews
- **Process Enhancement**: Instituted a mandatory code review process where peers and QA engineers review all code changes.
- **Checklist Development**: Created a code review checklist to ensure consistent and thorough reviews, focusing on best practices, potential bugs, and performance issues.

#### 3. Unit Testing & CI/CD 
- **Coverage Goals**: Established unit test coverage goals to ensure critical code paths are tested.
- **Pipeline Automation**: Set up CI/CD pipelines using Jenkins/GitHub Actions to automate builds, tests, and deployments.

#### 4. Test-Driven Development (TDD)
- **Training and Adoption**: Conducted training sessions on TDD principles and encouraged the adoption of TDD practices within the development team.
- **Implementation**: Developers write tests before writing the corresponding code, ensuring that the code meets the requirements from the outset.