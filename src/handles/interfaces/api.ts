import { IPersonalization, IPersonalizedHandle, IHandleMetadata, IUTxO, IReferenceToken, HandleType, ISubHandleSettings, IPzDatumConvertedUsingSchema } from '.';

export interface SubHandleSettings {
    settings: ISubHandleSettings;
    utxo: IUTxO;
}

export interface StoredHandle extends IPersonalizedHandle {
    amount: number;
    default?: boolean;
    pz_enabled?: boolean;
    resolved_addresses: {
        ada: string;
        [key: string]: string;
    };
    payment_key_hash: string;
    subhandle_settings?: {
        settings?: string;
        utxo: IUTxO;
    };
    sub_rarity?: string;
    sub_length?: number;
    sub_characters?: string;
    sub_numeric_modifiers?: string;
    virtual?: {
        expires_time: number;
        public_mint: boolean;
    };
    original_address?: string;
}

export interface HandleHistory {
    old: Partial<StoredHandle> | null;
    new?: Partial<StoredHandle> | null;
}

export interface ISlotHistoryIndex {
    [handleHex: string]: HandleHistory;
}

export interface IHandleStoreMetrics {
    firstSlot?: number;
    lastSlot?: number;
    currentSlot?: number;
    elapsedOgmiosExec?: number;
    elapsedBuildingExec?: number;
    firstMemoryUsage?: number;
    currentBlockHash?: string;
    tipBlockHash?: string;
    memorySize?: number;
    networkSync?: number;
}

export interface SaveMintingTxInput {
    hex: string;
    name: string;
    adaAddress: string;
    og_number: number;
    image: string;
    image_hash?: string;
    slotNumber: number;
    utxo: string;
    lovelace: number;
    svg_version?: string;
    bg_image?: string;
    pfp_image?: string;
    datum?: string;
    script?: { type: string; cbor: string };
    last_update_address?: string;
    personalization?: IPersonalization;
    reference_token?: IReferenceToken;
    resolved_addresses?: Record<string, string>;
    amount?: number;
    version?: number;
    handle_type: HandleType;
    sub_rarity?: string;
    sub_length?: number;
    sub_characters?: string;
    sub_numeric_modifiers?: string;
    virtual?: {
        expires_time: number;
        public_mint: boolean;
    };
    original_address?: string;
    pz_enabled?: boolean;
}

export interface SaveWalletAddressMoveInput {
    slotNumber: number;
    name: string;
    adaAddress: string;
    utxo: string;
    datum?: string;
    script?: { type: string; cbor: string };
}

export interface SavePersonalizationInput {
    slotNumber: number;
    hex: string;
    name: string;
    personalization: IPersonalization;
    reference_token: IReferenceToken;
    personalizationDatum: IPzDatumConvertedUsingSchema | null;
    metadata: IHandleMetadata | null;
}

export interface SaveSubHandleSettingsInput {
    name: string;
    settingsDatum?: string;
    utxoDetails: IUTxO;
    slotNumber: number;
}

export interface HolderAddressIndex {
    handles: Set<string>;
    defaultHandle: string;
    manuallySet: boolean;
    type: string;
    knownOwnerName: string;
}

export interface HolderAddressDetails {
    total_handles: number;
    address: string;
    type: string;
    known_owner_name: string;
    default_handle: string;
    manually_set: boolean;
}