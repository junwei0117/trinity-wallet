export default {
    CANNOT_TRANSITION_ADDRESSES_WITH_ZERO_BALANCE: 'Cannot transition addresses with zero balance.',
    ADDRESS_ALREADY_ATTACHED: 'Address already attached.',
    KEY_REUSE: 'Key reuse detected.',
    NOT_ENOUGH_BALANCE: 'Not enough balance.',
    ADDRESS_HAS_PENDING_TRANSFERS: 'Input addresses already used in a pending transfer.',
    FUNDS_AT_SPENT_ADDRESSES: 'WARNING FUNDS AT SPENT ADDRESSES.',
    CANNOT_SEND_TO_OWN_ADDRESS: 'Cannot send to an own address.',
    POW_FUNCTION_UNDEFINED: 'Proof of work function is undefined.',
    BUNDLE_NO_LONGER_VALID: 'Bundle no longer valid',
    PERSISTOR_UNDEFINED: 'Persistor is undefined.',
    ATTACH_TO_TANGLE_UNAVAILABLE: 'attachToTangle is not available',
    COMMAND_UNKNOWN: (command) => `Command ${command} is unknown`,
    TRANSACTION_ALREADY_CONFIRMED: 'Transaction already confirmed.',
    INCOMING_TRANSFERS: 'Incoming transfers to all selected inputs',
    NODE_NOT_SYNCED: 'Node not synced',
    INVALID_BUNDLE: 'Invalid bundle',
    INVALID_BUNDLE_CONSTRUCTED_DURING_REATTACHMENT: 'Invalid bundle constructed during reattachment.',
    INVALID_PARAMETERS: 'Invalid parameters',
    ALREADY_SPENT_FROM_ADDRESSES: 'Already spent from addresses',
    TRANSACTION_IS_INCONSISTENT: 'Transaction is inconsistent.',
    ADDRESS_METADATA_LENGTH_MISMATCH: 'Address metadata length mismatch.',
    SOMETHING_WENT_WRONG_DURING_INPUT_SELECTION: 'Something went wrong during input selection.',
    NO_NODE_TO_RETRY: 'No node to retry.',
    EMPTY_ADDRESS_DATA: 'Empty address data.',
    INVALID_INPUT: 'Invalid input.',
    INVALID_TRANSFER: 'Invalid transfer.',
    CANNOT_SWEEP_TO_SAME_ADDRESS: 'Cannot sweep to same address.',
    BALANCE_MISMATCH: 'Balance mismatch.',
    PROMOTIONS_LIMIT_REACHED: 'Promotions limit reached.',
    EMPTY_BUNDLE_PROVIDED: 'Empty bundle provided.',
    DETECTED_INPUT_WITH_ZERO_BALANCE: 'Detected input with zero balance.',
    INPUTS_THRESHOLD_CANNOT_BE_ZERO: 'Inputs threshold cannot be zero.',
    INPUTS_LIMIT_CANNOT_BE_ZERO: 'Inputs limit cannot be zero.',
    CANNOT_FIND_INPUTS_WITH_PROVIDED_LIMIT: 'Cannot find inputs with provided limit.',
    INSUFFICIENT_BALANCE: 'Insufficient balance.'
};
