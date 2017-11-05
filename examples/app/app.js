import $ from 'jquery';
// import Draggable from 'Draggable';

$(document).ready(() => {
  console.log('**** webpack is serving my app.js!');

  // EXAMPLE Visualforce Remoting call from the presentation
  // Visualforce.remoting.Manager.invokeAction(
  //      vfrAccounts,
  //      (result,event) => {
  //      	const resultHTML = createAccountHTML(result);
  //      	$('.js-account-list').append(resultHTML.join(''));

  //        // find our elements
  //        const elements = $('.slds-card');

  //        // options for each drag instance
  //        const options = {
  //          setCursor: true
  //        };

  //        // loop over the 3 balls...
  //        for (var n = elements.length; n--;) {
  //          // ... and initialize drag for each
  //          window.d = new Draggable(elements[n]);
  //        }
  //      }
  //  );
});

// function createAccountHTML(accounts) {
//     return accounts.map((account) => {
//         return `
//             <article class="slds-card card-width">
//               <div class="slds-card__header slds-grid">
//                 <header class="slds-media slds-media_center slds-has-flexi-truncate">
//                   <div class="slds-media__figure">
//                     <span class="slds-icon_container slds-icon-standard-contact" title="description of icon when needed">
//                       <svg class="slds-icon slds-icon_small" aria-hidden="true">
//                         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/apexpages/slds/latest/assets/icons/standard-sprite/svg/symbols.svg#contact" />
//                       </svg>
//                     </span>
//                   </div>
//                   <div class="slds-media__body">
//                     <h2>
//                       <a href="javascript:void(0);" class="slds-card__header-link slds-truncate" title="[object Object]">
//                         <span class="slds-text-heading_small">${account.Name}</span>
//                       </a>
//                     </h2>
//                   </div>
//                 </header>
//               </div>
//               <div class="slds-card__body">
//                 <table class="slds-table slds-table_fixed-layout slds-table_bordered slds-no-row-hover slds-table_cell-buffer">
//                   <thead>
//                     <tr class="slds-text-title_caps">
//                       <th scope="col">
//                         <div class="slds-truncate" title="Name">Name</div>
//                       </th>
//                       <th scope="col">
//                         <div class="slds-truncate" title="Title">Title</div>
//                       </th>
//                       <th scope="col">
//                         <div class="slds-truncate" title="Email">Email</div>
//                       </th>
//                     </tr>
//                   </thead>
//                   ${createContactHTML(account.Contacts)}
//                 </table>
//               </div>
//             </article>
//         `;
//     });
// }

// function createContactHTML(contacts) {
//     return contacts.map((contact) => {
//         return `
//             <tbody>
//               <tr class="slds-hint-parent">
//                 <th scope="row">
//                   <div class="slds-truncate" title="${contact.Name}"><a href="javascript:void(0);">${contact.Name}</a></div>
//                 </th>
//                 <td>
//                   <div class="slds-truncate" title="Director of Operations">${contact.Title}</div>
//                 </td>
//                 <td>
//                   <div class="slds-truncate" title="adam@company.com">${contact.Email}</div>
//                 </td>
//               </tr>
//             </tbody>
//         `;
//     });
// }