# Single-Spa-POC
A proof of concept on using the micro-frontend framework Single-Spa. This contains two different sites.

## Test.SingleSpa
This test what just to see how well the framework works with multiple micro-frontends. All of the frontends use react.

## Test.SingleSpa.Company
This attempt is to try and see how a web site might be layed out using Single-Spa.

## NOTES

### Nice to Knows

- The majority of how Single-Spa works is by using SystemJS Import Mapping to pull a minifed JavaScript file from a particular endpoint. This allows the different micro-front ends to exists on different ports or urls than the man root-config.
- It is suggested that the Root-Config application not use a particular JavaScript framework and just use plain JavaScript.
- There is documentation on the process for migrating existing code to use Single-Spa. [link](https://single-spa.js.org/docs/migrating-existing-spas)

### Angular Creation Notes
In order to create an angular application for Single-Spa I ran the following commands:

    npm install -g @angular/cli
    ng new agile-manifesto --routing --prefix company
    ng add single-spa-angular

When attempting to use the angular cli I had to run the following commands as Administrator:
    
    Set-ExecutionPolicy RemoteSigned
    Unblock-File -Path "C:\Users\<user-name>\AppData\Roaming\npm\ng.ps1"

## RATING

### Incremental upgrade ★★★✰✰
Since you are able to completely separate each micro-frontend from one another you are able to [strangler-fig](https://martinfowler.com/bliki/StranglerFigApplication.html) upgrade your web site. As long as each front end is en-capsuled into their own section of the page or mount/unmounting the same area there shouldn't be any extra work for upgrade.

There is one caveat to this approach with Single-Spa. There is extra work that is needed to support multiple version of the [same dependency](https://single-spa.js.org/docs/faq/#can-i-have-only-one-version-of-react-vue-angular-etc-loaded). This is not recommended to have two version simultaneously supported.

### Simple, Decoupled Codebases ★★★★★
With Single-Spa having a root application that downloads the JavaScript of each micro-frontend it allows each application to exist in its own repo and CD/CI pipelines.

### Autonomous teams ★★★★✰
With how separate each micro-frontend is from each other ins Single-Spa it makes it very easy for a team to make any change they want in their particular application without needed the assistance of other teams.

One drawback of the Single-Spa implementation is the need of managing dependencies so they are only loaded once for the entire web app and the initial set up to added the required Single-Spa functions to the top level of the app.

### Technology Agnostic ★★✰✰✰
While Single-Spa can technically support any JavaScript framework it will be a lot of extra work to support anything that doesn't already have a Single-Spa CLI created for it. For a list of all CLI supported frameworks head [here](https://single-spa.js.org/docs/ecosystem#help-for-frameworks).

If we will need to allow access to a page or set of pages that don't use JavaScript we will need to create another process for loading/redirecting users to those pages.
