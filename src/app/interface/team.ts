export interface Team {
    city:         string;
    fullName:     string;
    teamId:       string;
    nickname:     string;
    logo:         string;
    shortName:    string;
    allStar:      string;
    nbaFranchise: string;
    leagues:      Leagues;
}

export interface Leagues {
    standard: Standard;
}

export interface Standard {
    confName: string;
    divName:  string;
}